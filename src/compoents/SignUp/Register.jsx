import React from 'react' ;
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
  } from "@chakra-ui/react";

  function Register() {
    return (
      <div>
        <Flex align="center" width="full" justifyContent="center">
          <Box pt={10}>
            <Box textAlign="center">
              <Heading>Register</Heading>
            </Box>
            <Box my={5} textAlign="left">
              <form onSubmit={() => {}}>
                <FormControl>
                  <FormLabel>e-mail</FormLabel>
                  <Input name="e-mail" />
                </FormControl>
  
                <FormControl mt="4">
                  <FormLabel>Password</FormLabel>
                  <Input name="password" type="password" />
                </FormControl>
  
                <FormControl mt="4">
                  <FormLabel>
                    Password Confirm
                  </FormLabel>
                  <Input name="password confirm" type="password" />
                </FormControl>
                <Button mt="4" width="full" type="submit">
                  Register
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </div>
    );
  }
  export default Register;