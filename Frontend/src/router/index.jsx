import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import BookPage from "../components/book/BookPage";
import SellPage from "../pages/sellBooks/SellPage";
import RootLayout from "./../pages/Layout";
import ErrorHandler from "./../components/errors/ErrorHandler";
import NotFoundPage from "./../pages/NotFoundPage";
import RegisterPage from "../pages/Registerpage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/cart/Cart";
import ReviewsPage from './../pages/reviews/ReviewsPage';
import Authors from "./../pages/authors/Authors";
import AboutUs from './../pages/about/aboutus';
import ForgotPasswordPage from "./../pages/ForgotPasswordPage";
import ResetPasswordPage from "./../pages/ResetPasswordPage";
import EmailVerificationPage from "./../pages/EmailVerificationPage";
import BooksPage from "./../pages/Books/Books";
import ProtectedRoute from "./../components/auth/ProtectedRoute";
import RedirectAuthenticatedUser from "./../components/auth/RedirectAuthenticatedUser";
import AuthorPage from "./../pages/AuthorPage";
import PaymentSuccessPage from './../pages/PaymentSuccessPage';
import PaymentCancelPage from "../pages/PaymentCancelPage";
import ProfilePage from "../pages/ProfilePage";
import SettingPage from "../pages/SettingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route
          path="/register"
          element={
            <RedirectAuthenticatedUser>
              <RegisterPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route index element={<HomePage />} />
        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <BookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sellBook"
          element={
            <ProtectedRoute>
              <SellPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Books"
          element={
            <ProtectedRoute>
              <BooksPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment-success"
          element={
            <ProtectedRoute>
              <PaymentSuccessPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment-cancel"
          element={
            <ProtectedRoute>
              <PaymentCancelPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/authors"
          element={
            <ProtectedRoute>
              <Authors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <ProtectedRoute>
              <ReviewsPage />
            </ProtectedRoute>
          }
        />
          <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AuthorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <ProtectedRoute>
              <SettingPage />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
export default router;
