-- ==========================================================
-- AND Hitech Industries Limited (AHIL) Database Schema
-- Execute this script in phpMyAdmin (http://localhost/phpmyadmin)
-- ==========================================================

CREATE DATABASE IF NOT EXISTS `andhitech_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `andhitech_db`;

-- 1. Contact Us Inquiries Table
CREATE TABLE IF NOT EXISTS `contact_inquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `organization` VARCHAR(255) DEFAULT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `inquiry_type` VARCHAR(100) DEFAULT 'General Inquiry',
  `message` TEXT NOT NULL,
  `status` VARCHAR(50) DEFAULT 'New',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Technical RFQ / Quote Requests Table
CREATE TABLE IF NOT EXISTS `quote_requests` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `company` VARCHAR(255) DEFAULT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `product` VARCHAR(255) NOT NULL,
  `notes` TEXT DEFAULT NULL,
  `status` VARCHAR(50) DEFAULT 'Pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Online Complaints / Grievance SLA Table
CREATE TABLE IF NOT EXISTS `complaints` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ticket_id` VARCHAR(50) NOT NULL UNIQUE,
  `date` DATE NOT NULL,
  `customer_railway` VARCHAR(255) NOT NULL,
  `depot` VARCHAR(255) NOT NULL,
  `coach_no` VARCHAR(100) NOT NULL,
  `production_unit` VARCHAR(255) DEFAULT NULL,
  `letter_no` VARCHAR(100) DEFAULT NULL,
  `letter_date` DATE DEFAULT NULL,
  `portal_complaint_no` VARCHAR(100) DEFAULT NULL,
  `product` VARCHAR(255) NOT NULL,
  `failure_description` TEXT NOT NULL,
  `failure_date` DATE DEFAULT NULL,
  `contact_person_name` VARCHAR(255) NOT NULL,
  `contact_designation` VARCHAR(255) DEFAULT NULL,
  `contact_phone` VARCHAR(50) NOT NULL,
  `contact_email` VARCHAR(255) NOT NULL,
  `status` VARCHAR(50) DEFAULT 'Logged',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Career Applications Table
CREATE TABLE IF NOT EXISTS `career_applications` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `role_of_interest` VARCHAR(255) DEFAULT 'General Application',
  `experience` VARCHAR(100) DEFAULT NULL,
  `notes` TEXT DEFAULT NULL,
  `status` VARCHAR(50) DEFAULT 'Submitted',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
