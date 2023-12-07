import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactPage() {
    React.useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div ata-aos="zoom-in-up" id = "contact">
      <div class="container my-7 mx-auto md:px-6">
        <section class="mb-10">
          <div class="flex justify-center">
            <div class="text-center md:max-w-xl lg:max-w-3xl">
              <h2 class="mb-12 px-6 text-3xl font-bold">Contact me</h2>
            </div>
          </div>

          <div  class="flex flex-wrap justify-between items-center">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
              <Box  sx={{ flexGrow: 1 }}>
                <Grid container spacing={4} >
                    
                    <Grid>
                    {/* <Item> */}
                    <Typography variant='h5' style={{color : 'black'}}>
                            Just Say Hello  
                    </Typography>
                    <form>
                    <TextField
                          placeholder="Your Name"
                          label="Your Name"
                          variant="outlined"
                          type="message"
                          fullWidth
                          required
                          sx={{marginTop : '30px'}}
                        />
                    <TextField
                          placeholder="Your Email"
                          label="Your Email"
                          type="email"
                          variant="outlined"
                          fullWidth
                          required
                          sx={{marginTop : '20px'}}
                        />
                    <TextField
                          placeholder="Your Message"
                          label="Your Message"
                          variant="outlined"
                          type="message"
                          fullWidth
                          required
                          sx={{marginTop : '20px'}}
                        />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onSubmit={()=>alert('Your Message is sent Successfully')}
                        fullWidth
                        sx={{ marginTop : '10px',marginBottom : '20px', background : "#028D8D", ":hover" : {background : "#24BFA7"}}}
                        >
                        Submit
                        </Button>
                    </form>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
                </Box>
               
              </form>
            </div>
            <div  class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div class="flex flex-wrap">
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <span class="material-symbols-outlined">
                          phone_in_talk
                        </span>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">Phone</p>

                      <p class="text-neutral-500 dark:text-neutral-200">
                        +880 1794767316
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <span class="material-symbols-outlined">
                          my_location
                        </span>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">Address</p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        Tomsom Bridge, Cumilla
                      </p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <span class="material-symbols-outlined">mail</span>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">Email</p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        mdtarek168504@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <LinkedInIcon />
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">LinkedIn</p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        linkedin.com/in/mdtarek33/
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      <p className="mb-1">&copy; All rights reserved by <span className="text-mainColor">Md Tarek Hossain Tusher</span></p>
    </div>
  );
}

export default ContactPage;
