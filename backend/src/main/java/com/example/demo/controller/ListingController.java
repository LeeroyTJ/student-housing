package com.example.demo.controller;

import com.example.demo.model.Listing;
import com.example.demo.model.Landlord;
import com.example.demo.repository.ListingRepository;
import com.example.demo.repository.LandlordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/listings")
public class ListingController {

    @Autowired
    private ListingRepository listingRepo;

    @Autowired
    private LandlordRepository landlordRepo;

    // GET all listings
    @GetMapping
    public List<Listing> getAllListings() {
        return listingRepo.findAll();
    }

    // GET listing by ID
    @GetMapping("/{id}")
    public ResponseEntity<Listing> getListingById(@PathVariable Long id) {
        return listingRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST create listing
    @PostMapping
    public ResponseEntity<Listing> createListing(@RequestBody Listing listing) {
        if (listing.getLandlord() == null || listing.getLandlord().getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        Landlord landlord = landlordRepo.findById(listing.getLandlord().getId()).orElse(null);
        if (landlord == null) {
            return ResponseEntity.badRequest().build();
        }

        listing.setLandlord(landlord);
        Listing saved = listingRepo.save(listing);
        return ResponseEntity.ok(saved);
    }

    // PUT update listing
    @PutMapping("/{id}")
    public ResponseEntity<Listing> updateListing(@PathVariable Long id, @RequestBody Listing updatedListing) {
        return listingRepo.findById(id)
                .map(listing -> {
                    listing.setTitle(updatedListing.getTitle());
                    listing.setType(updatedListing.getType());
                    listing.setPrice(updatedListing.getPrice());
                    listing.setAvailable(updatedListing.getAvailable());
                    listing.setLocation(updatedListing.getLocation());
                    listing.setLatitude(updatedListing.getLatitude());
                    listing.setLongitude(updatedListing.getLongitude());

                    if (updatedListing.getLandlord() != null && updatedListing.getLandlord().getId() != null) {
                        Landlord landlord = landlordRepo.findById(updatedListing.getLandlord().getId()).orElse(listing.getLandlord());
                        listing.setLandlord(landlord);
                    }

                    return ResponseEntity.ok(listingRepo.save(listing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE listing
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteListing(@PathVariable Long id) {
        return listingRepo.findById(id)
                .map(listing -> {
                    listingRepo.delete(listing);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
