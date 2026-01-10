package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.demo.model.Landlord;
import com.example.demo.model.Listing;
import com.example.demo.repository.LandlordRepository;
import com.example.demo.repository.ListingRepository;

@RestController
@RequestMapping("/api")
public class TestController {

    private final LandlordRepository landlordRepo;
    private final ListingRepository listingRepo;

    public TestController(LandlordRepository landlordRepo, ListingRepository listingRepo) {
        this.landlordRepo = landlordRepo;
        this.listingRepo = listingRepo;
    }

    // Get all landlords
    @GetMapping("test/landlords")
    public List<Landlord> getAllLandlords() {
        return landlordRepo.findAll();
    }

    // Get all listings
    @GetMapping("test/listings")
    public List<Listing> getAllListings() {
        return listingRepo.findAll();
    }
}
