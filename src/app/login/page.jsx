"use client";
import { useWixClient } from "@/hooks/WixClient";
import React, { useState } from "react";

export default function Login() {
  const [mode, setMode] = useState("LOGIN");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle =
    mode === "LOGIN"
      ? "Log in"
      : mode === "REGISTER"
      ? "Register"
      : mode === "RESET_PASSWORD"
      ? "Reset Your Password"
      : "Verify Your Email";

  const buttonTitle =
    mode === "LOGIN"
      ? "Login"
      : mode === "REGISTER"
      ? "Register"
      : mode === "RESET_PASSWORD"
      ? "Reset"
      : "Verify";

  const wixClient = useWixClient();

  return (
    <div className="form-container">
      <form>
        <h1>{formTitle}</h1>
        {mode === "REGISTER" ? (
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            required
          />
        ) : null}
        {mode !== "EMAIL_VERIFICATION" ? (
          <input name="email" type="email" placeholder="xyz@abc.com" required />
        ) : (
          <input name="emailCode" type="text" placeholder="CODE" required />
        )}
        {mode === "LOGIN" || mode === "REGISTER" ? (
          <input
            name="Password"
            id="Password"
            placeholder="Password"
            type="password"
            required
          />
        ) : null}

        {mode === "LOGIN" && (
          <div
            id="cursor"
            onClick={() => {
              setMode("RESET_PASSWORD");
            }}
          >
            Forgot Password
          </div>
        )}

        <button>{buttonTitle}</button>

        {error && <div>{error}</div>}
        {message && <div>{message}</div>}

        {mode === "LOGIN" && (
          <div
            id="cursor"
            onClick={() => {
              setMode("REGISTER");
            }}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === "REGISTER" && (
          <div
            id="cursor"
            onClick={() => {
              setMode("LOGIN");
            }}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === "RESET_PASSWORD" && (
          <div
            id="cursor"
            onClick={() => {
              setMode("LOGIN");
            }}
          >
            Remember Password
          </div>
        )}
      </form>
    </div>
  );
}
