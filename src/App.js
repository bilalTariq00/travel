import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./components/darkmode/DarkModeContext";
import FullPageSection from "./components/AnimWrapper/FullPageSection";
import AuthPage from "./components/login/AuthPage";
import AdminPage from "./components/admin/admin";
import BookNow from "./components/payment/bookNow";
import { PaymentPlans } from "./components/payment/PaymentPlan";
import AdvanceBooking from "./components/history/AdvanceBooking";
import ParkingHistory from "./components/history/ParkingHistory";
import PaymentHistory from "./components/history/PaymentHistory";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate splash screen duration (3 seconds)
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Define Routes Using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <FullPageSection>
            <HeroSection />
          </FullPageSection>
          <FullPageSection>
            <FeaturesSection />
          </FullPageSection>
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: <AuthPage />,
    },
    {
      path: "/signup",
      element: <AuthPage isSignUp />,
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Navbar />
          <FullPageSection>
            <HeroSection />
          </FullPageSection>
          <FullPageSection>
            <FeaturesSection />
          </FullPageSection>
          <FullPageSection>
            <PaymentPlans/>
          </FullPageSection>
          <FullPageSection>
            <AdvanceBooking/>
          </FullPageSection>
          <FullPageSection>
            <ParkingHistory/>
          </FullPageSection>
          <FullPageSection>
            <PaymentHistory/>
          </FullPageSection>
          <Footer />
        </>
      ),
    },
    {
      path: "/admin",
      element: (
        <>
          <Navbar />
          <FullPageSection>
            <AdminPage/>
          </FullPageSection>
          <Footer />
        </>
      ),
    },
    {
      path:"/booknow",
      element:(
        <>
        <Navbar/>
        <FullPageSection>
          <BookNow />
        </FullPageSection>
        <Footer />

        </>
      )
    }
  ]);
  
  return (
    <DarkModeProvider>
      <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 text-black dark:text-white transition">
        {isLoading ? <SplashScreen /> : <RouterProvider router={router} />}
      </div>
    </DarkModeProvider>
  );
}

export default App;
