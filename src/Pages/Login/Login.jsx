import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authlogin } from "../../Redux/action/auth.action";
import { LOGIN_SUCCESS } from "../../Redux/actiontypes/auth.types";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = () => {
    if (email && pass) {
      dispatch(
        authlogin({
          email: email,
          password: pass,
        })
      ).then((res) => {
        if (res === LOGIN_SUCCESS) {
          navigate("/", { replace: true });
        } else if (res !== LOGIN_SUCCESS) {
          toast({
            description: "Please enter your correct email and pasword.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-center",
          });
        }
      });
    } else {
      toast({
        description: "Please enter your correct email and pasword.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-center",
      });
    }
  };
  return (
    <>
      <Box
        bg="url('https://images.unsplash.com/photo-1580166463495-ab4d21922c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNydWlzZSUyMHNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60')"
        backgroundSize={"cover"}
        w="100%"
        h="100vh"
        overflow={"hidden"}
        mb="5"
      >
        <Box>
          <HStack display="flex" flexDirection={"row"} justifyContent="center">
            <Image
              height={"80px"}
              src="./img/vishal/footerlogo.png"
              alt="d"
            ></Image>

            <Text
              color="#ffff"
              fontWeight="700"
              fontSize={{ sm: "14px", md: "20px", lg: "34px" }}
              lineHeight="41px"
            >
              DANAOS
            </Text>
          </HStack>

          <Box
            w={["90%", "70%", "500px", "50%", "50%"]}
            rounded="10px"
            py="3"
            bgColor="rgba(255, 255, 255, 0.5)"
            mt="10px"
            mx={"auto"}
          >
            <Text
              fontSize={["15px", "20px", "25px", "30px"]}
              fontWeight="700"
              color="#081839"
              textAlign="center"
              mb="10px"
            >
              Welcome to DANAOS
            </Text>
            <Box textAlign="center">
              <Text
                fontSize={["12px", "15px", "18px", "22px"]}
                fontWeight="400"
                color="#081839"
                borderBottom="1px"
                borderColor="#081839"
                // mx="150px"
                pb="10px"
                mb="7px"
              >
                Login to your account
              </Text>
              <Text fontSize="12px" fontWeight="600" color="#081839">
                You can Login using your membership email and password
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="30px"
              gap="20px"
            >
              <Input
                placeholder="email address"
                bgColor="#F2CD5C"
                color="#000000"
                fontSize="18px"
                py="16px"
                px="20px"
                // w="300px"
                w={["60%", "80%", "60%", "40%", "40%"]}
                rounded="10px"
                outline="none"
                border="none"
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="password"
                bgColor="#F2CD5C"
                color="#000000"
                fontSize="18px"
                py="16px"
                px="20px"
                // w="300px"
                w={["60%", "80%", "60%", "40%", "40%"]}
                rounded="10px"
                outline="none"
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <Box
                rounded="10px"
                border="1px"
                borderColor="#F2CD5C"
                w="186px"
                h="55px"
                p="6px"
                mt="10px"
              >
                <Button
                  bgColor="#081839"
                  rounded="10px"
                  w="100%"
                  h="100%"
                  color="#F2CD5C"
                  fontSize="22px"
                  fontWeight="700"
                  _hover={{ bgColor: "#061536" }}
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Box>
            </Box>
            <Box
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Text fontSize="22px" fontWeight="700" color="#081839">
                Not a member yet?
              </Text>
              <Text fontSize="12px" fontWeight="600" color="#081839">
                Signup today and start earning Dream Points
              </Text>

              <Box
                rounded="10px"
                border="1px"
                borderColor="#F2CD5C"
                h="55px"
                p="6px"
                mt="10px"
              >
                <Button
                  bgColor="#081839"
                  rounded="10px"
                  w="100%"
                  h="100%"
                  color="#F2CD5C"
                  fontSize="22px"
                  fontWeight="700"
                  _hover={{ bgColor: "#061536" }}
                  onClick={() => navigate("/signpage")}
                >
                  Become a member
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;

// import {
//   Box,
//   Button,
//   HStack,
//   Image,
//   Input,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { LOGIN_SUCCESS } from "../../Redux/actiontypes/auth.types";
// import { authlogin } from "../../Redux/action/auth.action";

// const Login = () => {
//   const navigate = useNavigate();
//   const toast = useToast();
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");

//   const handlemember=()=>{
//     navigate("/usersignup")
//   }

//   const handleSubmit = () => {
//     if (email && pass) {
//       dispatch(
//         authlogin({
//           email: email,
//           password: pass,
//         })
//       ).then((res) => {
//         if (res === LOGIN_SUCCESS) {
//           navigate("/", { replace: true });
//         } else if (res !== LOGIN_SUCCESS) {
//           toast({
//             description: "Please enter your correct email and pasword.",
//             status: "error",
//             duration: 3000,
//             isClosable: true,
//             position: "top-center",
//           });
//         }
//       });
//     } else {
//       toast({
//         description: "Please enter your correct email and pasword.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//         position: "top-center",
//       });
//     }
//   };
//   return (
//     <>
//       <Box
//         bg="url('https://images.unsplash.com/photo-1580166463495-ab4d21922c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNydWlzZSUyMHNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60')"
//         backgroundSize={"cover"}
//         w="100%"
//         h="100vh"
//         overflow={"hidden"}
//       >
//         <Box>
//           <HStack
//             display="flex"
//             flexDirection={{ sm: "column", md: "column", lg: "row" }}
//             justifyContent="center"
//           >
//             <Box>
//               <Image height={"80px"} src="./img/mainlogo.png" alt="d"></Image>
//               <Image width={"80px"} src="./img/danaostext.png" alt="d"></Image>
//             </Box>

//             <Text
//               color="#ffff"
//               fontWeight="700"
//               fontSize={{ sm: "14px", md: "20px", lg: "34px" }}
//               lineHeight="41px"
//             >
//               DANAOS
//             </Text>
//           </HStack>

//           <Box
//             w={["auto","auto","720px"]}
//             rounded="10px"
//             py="3"
//             bgColor="rgba(255, 255, 255, 0.5)"
//             mt="10px"
//             mx={"auto"}
//           >
//             <Text
//               fontSize="30px"
//               fontWeight="700"
//               color="#081839"
//               textAlign="center"
//               mb="10px"
//             >
//               Welcome to DANAOS
//             </Text>
//             <Box textAlign="center">
//               <Text
//                 fontSize="22px"
//                 fontWeight="400"
//                 color="#081839"
//                 borderBottom="1px"
//                 borderColor="#081839"
//                 mx="150px"
//                 pb="10px"
//                 mb="7px"
//               >
//                 Login to your account
//               </Text>
//               <Text fontSize="12px" fontWeight="600" color="#081839">
//                 You can Login using your membership email and password
//               </Text>
//             </Box>
//             <Box
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//               mt="30px"
//               gap="20px"
//             >
//               <Input
//                 placeholder="email address"
//                 bgColor="#F2CD5C"
//                 color="#000000"
//                 fontSize="18px"
//                 py="16px"
//                 px="20px"
//                 w="300px"
//                 rounded="10px"
//                 outline="none"
//                 border="none"
//                 value={email}
//                 type="email"
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />
//               <Input
//                 placeholder="password"
//                 bgColor="#F2CD5C"
//                 color="#000000"
//                 fontSize="18px"
//                 py="16px"
//                 px="20px"
//                 w="300px"
//                 rounded="10px"
//                 outline="none"
//                 type="password"
//                 value={pass}
//                 onChange={(e) => {
//                   setPass(e.target.value);
//                 }}
//               />
//               <Box
//                 rounded="10px"
//                 border="1px"
//                 borderColor="#F2CD5C"
//                 w="186px"
//                 h="55px"
//                 p="6px"
//                 mt="10px"
//               >
//                 <Button
//                   bgColor="#081839"
//                   rounded="10px"
//                   w="100%"
//                   h="100%"
//                   color="#F2CD5C"
//                   fontSize="22px"
//                   fontWeight="700"
//                   _hover={{ bgColor: "#061536" }}
//                   onClick={handleSubmit}
//                 >
//                   Login
//                 </Button>
//               </Box>
//             </Box>
//             <Box
//               textAlign="center"
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//             >
//               <Text fontSize="22px" fontWeight="700" color="#081839">
//                 Not a member yet?
//               </Text>
//               <Text fontSize="12px" fontWeight="600" color="#081839">
//                 Signup today and start earning Dream Points
//               </Text>

//               <Box
//                 rounded="10px"
//                 border="1px"
//                 borderColor="#F2CD5C"
//                 h="55px"
//                 p="6px"
//                 mt="10px"
//               >
//                 <Button
//                   bgColor="#081839"
//                   rounded="10px"
//                   w="100%"
//                   h="100%"
//                   color="#F2CD5C"
//                   fontSize="22px"
//                   fontWeight="700"
//                   _hover={{ bgColor: "#061536" }}
//                   onClick={handlemember}
//                 >
//                   Become a member
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Login;
