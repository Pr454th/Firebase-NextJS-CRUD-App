"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Auth from "@/components/auth";
import { db, auth, storage } from "@/config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const [title, setTitle] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState(0);
  const [receivedAnOscar, setReceivedAnOscar] = useState(false);
  const [file, setFile] = useState(null);
  const [retrieveName, setRetrieveName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const fileRef = useRef(null);

  const moviesCollectionRef = collection(db, "movies");
  const getMovies = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
    }
  };
  // Real-time listener to fetch movies
  useEffect(() => {
    const unsubscribe = onSnapshot(moviesCollectionRef, (snapshot) => {
      setMovies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  const onMovieSubmit = async () => {
    try {
      console.log(title, releaseDate, receivedAnOscar);
      await addDoc(moviesCollectionRef, {
        title,
        releaseDate,
        receivedAnOscar,
        userId: auth?.currentUser?.uid, //adding this for making the user to add the movie only if he is logged in
      });
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setReleaseDate(0);
    setReceivedAnOscar(false);
  };

  const deleteMovie = async (id) => {
    try {
      await deleteDoc(doc(db, "movies", id));
    } catch (error) {
      console.log(error);
    }
    getMovies();
  };

  const updateMovie = async (id) => {
    try {
      await updateDoc(doc(db, "movies", id), {
        title: updatedTitle,
      });
    } catch (error) {
      console.log(error);
    }
    setUpdatedTitle("");
  };

  const uploadFile = async () => {
    if (!file) return;
    try {
      const storageRef = ref(storage, `project movies/${file.name}`);
      await uploadBytes(storageRef, file);
    } catch (error) {
      console.log(error);
    }
    setFile(null);
    fileRef.current.value = null;
  };

  const retrieveFile = async () => {
    try {
      const storageRef = ref(storage, `project movies/${retrieveName}`);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File download URL:", downloadURL);
      setFileUrl(downloadURL);
      // Perform further actions with the download URL, such as displaying the file or using it for download.
    } catch (error) {
      console.log(error);
    }
  };
  const generateRandomNames = async () => {
    const options = {
      method: "GET",
      url: "https://random-name-and-gender-generator.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "303b7706c9msha608101e58c1a57p1aec83jsnd5b7171640a9",
        "X-RapidAPI-Host": "random-name-and-gender-generator.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Firebase!</h1>
      <button onClick={generateRandomNames}>Generate Random Names</button>
      <div>
        <Auth />
      </div>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="releaseDate"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <input
          type="checkbox"
          checked={receivedAnOscar}
          onChange={(e) => setReceivedAnOscar(e.target.checked)}
        />
        <label>receivedAnOscar</label>
        <button onClick={onMovieSubmit}>Add Movie</button>
        <button onClick={getMovies}>Get Movies</button>
        <h1>File Upload</h1>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          ref={fileRef}
        />
        <button onClick={uploadFile}>Upload</button>
        <h1>File Retrieval</h1>
        <input
          type="text"
          placeholder="file name"
          value={retrieveName}
          onChange={(e) => setRetrieveName(e.target.value)}
        />
        <button onClick={retrieveFile}>Retrieve</button>
        <div>
          <a href={fileUrl}>{fileUrl}</a>
        </div>
      </div>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.title}>
            <div key={movie.title}>{movie.title}</div>
            <div>{movie.id}</div>
            <div>{movie.releaseDate}</div>
            <div>{movie.receivedAnOscar ? "Yes" : "No"}</div>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
            <input
              type="text"
              placeholder="title"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => updateMovie(movie.id)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
}
