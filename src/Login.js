import { useState } from "react";
import { Box, Input, Button, Heading, Center, Text } from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [colorMessage, setColorMessage] = useState("");

  const handleLogin = () => {
    if (username === "testuser" && password === "password123") {
      setColorMessage("green.300");
      setLoginMessage(`User started session`);
    }
    else {
      setColorMessage("red.300");
      setLoginMessage(`Wrong user or password`);
    }
  };

  return (
    <Center h="100vh">
      <Box maxW="sm" p={8} borderWidth={1} borderRadius="lg">
        <Heading mb={4}>Login</Heading>
        <Input
          placeholder="Username"
          mb={4}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          mb={4}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="loginButton" colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
        {loginMessage && <Text color={colorMessage} mt={4}>{loginMessage}</Text>}
      </Box>
    </Center>
  );
};

export default Login;
