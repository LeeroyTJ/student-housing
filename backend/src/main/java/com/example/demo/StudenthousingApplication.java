package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import com.example.demo.model.Landlord;
import com.example.demo.model.Listing;
import com.example.demo.repository.LandlordRepository;
import com.example.demo.repository.ListingRepository;


@SpringBootApplication
public class StudenthousingApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudenthousingApplication.class, args);
	}

	@Bean
	CommandLineRunner run(LandlordRepository landlordRepo, ListingRepository listingRepo) {
    	return args -> {
        	// Check if landlord already exists
        	if (landlordRepo.findByEmail("john@example.com").isEmpty()) {
            	// Create a landlord
            	Landlord landlord = new Landlord();
            	landlord.setFullName("John Doe");
            	landlord.setEmail("john@example.com");
            	landlord.setPassword("password123");
            	landlordRepo.save(landlord);

            	// Create a listing
            	Listing listing = new Listing();
            	listing.setTitle("Luxury Apartment");
            	listing.setType("Apartment");
            	listing.setPrice(1200);
            	listing.setAvailable(true);
            	listing.setLocation("Kabwe City");
            	listing.setLatitude(-14.4333);
            	listing.setLongitude(28.4500);
            	listing.setLandlord(landlord); // link to landlord
            	listingRepo.save(listing);

            	System.out.println("Seed data inserted successfully!");
        	} else {
            	System.out.println("Seed data already exists, skipping insertion.");
        	}
    	};
	}
}
