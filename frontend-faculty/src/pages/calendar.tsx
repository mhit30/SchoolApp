import React, { useContext, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { FacultyUserAuthContextType } from "@/types/FacultyUserAuthContextTypes";
import { FacultyUserAuthContext } from "@/hooks/contexts/FacultyUserAuthContextProvider";
import { useRouter } from "next/router";
import {
  SchoolContext,
  SchoolProvider,
} from "@/hooks/contexts/SchoolContextProvider";
import { SchoolContextType } from "@/types/SchoolContextTypes";
import { SchoolInfoCard } from "@/components/SchoolnfoCard";
import { CreateCalendarEventForm } from "@/modules/CreateCalendarEventForm";
import { EventsProvider } from "@/hooks/contexts/EventsContextProvider";
import { EventsInfoCard } from "@/components/EventsInfoCard";

export default function Home() {
  let router = useRouter();
  const { isAuthenticated } = useContext(
    FacultyUserAuthContext
  ) as FacultyUserAuthContextType;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signup");
    }
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <title>Calendar | EduConnect </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="mx-80">
          <div className="">
            <h1 className="text-3xl font-bold text-custom_primary">Events</h1>
            <SchoolProvider>
              <SchoolInfoCard />
            </SchoolProvider>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3">
                <CreateCalendarEventForm />
              </div>
              <div className="row-span-2 col-span-2">
                <EventsProvider>
                  <EventsInfoCard />
                </EventsProvider>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}