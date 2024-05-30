"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-full items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-10 py-20 px-12"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <AlertDialog key={"grid-1" + idx}>
              <AlertDialogTrigger>
                
                <motion.div
                  style={{ y: translateFirst }} // Apply the translateY motion value here
                  
                >
                      <Image
                        src={el}
                        className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                        height="400"
                        width="400"
                        alt="thumbnail"
                      />

                      <AlertDialogContent >
                          <AlertDialogHeader>
                            <div className="flex flex-col gap-10">
                              <AlertDialogTitle className="px-12">MAISON ÉCOLOGIQUE AVEC TUILE SOLAIRE SUR LE TOIT À EGG</AlertDialogTitle>
                              <AlertDialogDescription className="flex flex-col gap-10 px-12">
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at venenatis ante. In a consectetur ex. Praesent porta, neque ac iaculis sollicitudin, quam libero porta ligula, non pretium lacus ipsum eu felis. Vivamus vitae nulla justo. Integer pretium, eros ut euismod vehicula, tellus enim vestibulum tellus, et euismod lacus risus quis ex.</p>
                                <div className="flex items-center justify-center">
                            
                                  <img src={el} alt="" />
                                </div>
                              
                            </AlertDialogDescription>
                            </div>
                          </AlertDialogHeader>
                          {/* <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter> */}
                        </AlertDialogContent>

                </motion.div>
            </AlertDialogTrigger>
            </AlertDialog>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <AlertDialog key={"grid-2" + idx}>
            <AlertDialogTrigger>
              
              <motion.div
                style={{ y: translateFirst }} // Apply the translateY motion value here
                
              >
                    <Image
                      src={el}
                      className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                      height="400"
                      width="400"
                      alt="thumbnail"
                    />

                    <AlertDialogContent >
                        <AlertDialogHeader>
                          <div className="flex flex-col gap-10">
                            <AlertDialogTitle className="px-12">MAISON ÉCOLOGIQUE AVEC TUILE SOLAIRE SUR LE TOIT À EGG</AlertDialogTitle>
                            <AlertDialogDescription className="flex flex-col gap-10 px-12">
                              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at venenatis ante. In a consectetur ex. Praesent porta, neque ac iaculis sollicitudin, quam libero porta ligula, non pretium lacus ipsum eu felis. Vivamus vitae nulla justo. Integer pretium, eros ut euismod vehicula, tellus enim vestibulum tellus, et euismod lacus risus quis ex.</p>
                              <div className="flex items-center justify-center">
                          
                                <img src={el} alt="" />
                              </div>
                            
                          </AlertDialogDescription>
                          </div>
                        </AlertDialogHeader>
                        {/* <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter> */}
                      </AlertDialogContent>

              </motion.div>
          </AlertDialogTrigger>
          </AlertDialog>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <AlertDialog key={"grid-3" + idx}>
            <AlertDialogTrigger>
              
              <motion.div
                style={{ y: translateFirst }} // Apply the translateY motion value here
                
              >
                    <Image
                      src={el}
                      className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                      height="400"
                      width="400"
                      alt="thumbnail"
                    />

                    <AlertDialogContent >
                        <AlertDialogHeader>
                          <div className="flex flex-col gap-10">
                            <AlertDialogTitle className="px-12">MAISON ÉCOLOGIQUE AVEC TUILE SOLAIRE SUR LE TOIT À EGG</AlertDialogTitle>
                            <AlertDialogDescription className="flex flex-col gap-10 px-12">
                              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at venenatis ante. In a consectetur ex. Praesent porta, neque ac iaculis sollicitudin, quam libero porta ligula, non pretium lacus ipsum eu felis. Vivamus vitae nulla justo. Integer pretium, eros ut euismod vehicula, tellus enim vestibulum tellus, et euismod lacus risus quis ex.</p>
                              <div className="flex items-center justify-center">
                          
                                <img src={el} alt="" />
                              </div>
                            
                          </AlertDialogDescription>
                          </div>
                        </AlertDialogHeader>
                        {/* <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter> */}
                      </AlertDialogContent>

              </motion.div>
          </AlertDialogTrigger>
          </AlertDialog>
          ))}
        </div>
      </div>
    </div>
  );
};
