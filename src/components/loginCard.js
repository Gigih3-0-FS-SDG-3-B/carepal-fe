import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

function LoginCard() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Replace with actual login logic after API Documentation is given. 
      //   const response = await axios.post("/api/login", formData);
      console.log(formData);

      // if (response.status === 200) {
      if (true) {
        // Authentication successful, obtain the JWT token
        // const token = response.data.token;
        const token = "dummy_token"
        login(token);
        navigate("/");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="bg-white rounded shadow p-8">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginCard;
