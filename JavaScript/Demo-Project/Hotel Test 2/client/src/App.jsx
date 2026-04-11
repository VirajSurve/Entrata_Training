// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LoginPage from "./components/Pages/LoginPage.jsx";
import IndexPage from "./components/Pages/IndexPage.jsx";
import PlacesPage from "./components/Pages/PlacesPage.jsx";
import { UserContextProvider } from "./UserContext.jsx";
import ProfilePage from "./components/Pages/ProfilePage.jsx";
import PlacesFormPage from "./components/Pages/PlacesFormPage.jsx";
import PlacePage from "./components/Pages/PlacePage.jsx"; // <-- Renamed from SecondPage
import WishlistPage from "./components/WishlistPage.jsx";
import { WishlistProvider } from "./WishlistContext.jsx";
import BookingsPage from "./components/Booking/BookingsPage.jsx";
import BookingPage from "./components/Booking/BookingPage.jsx";
import ShowMore from "./components/Pages/PlacePage Components/ShowMore.jsx";

function App() {
  return (
    <UserContextProvider>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/:category" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<LoginPage />} />
            <Route path="/account" element={<ProfilePage />} />
            <Route path="/account/places" element={<PlacesPage />} />
            <Route path="/account/places/new" element={<PlacesFormPage />} />
            <Route path="/account/places/:id" element={<PlacesFormPage />} />
            <Route path="/account/bookings" element={<BookingsPage />} />
            <Route path="/account/bookings/:id" element={<BookingPage />} />
            <Route path="/place/:id" element={<PlacePage />} /> {/* <-- Renamed */}
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/place/:id/showmore" element={<ShowMore />} />
          </Route>
        </Routes>
      </WishlistProvider>
    </UserContextProvider>
  );
}

export default App;