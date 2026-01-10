package com.example.demo.controller;

import com.example.demo.model.Landlord;
import com.example.demo.repository.LandlordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/landlords")
public class LandlordController {

    @Autowired
    private LandlordRepository landlordRepo;

    // GET all landlords
    @GetMapping
    public List<Landlord> getAllLandlords() {
        return landlordRepo.findAll();
    }

    // GET landlord by ID
    @GetMapping("/{id}")
    public ResponseEntity<Landlord> getLandlordById(@PathVariable Long id) {
        return landlordRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST create landlord
    @PostMapping
    public Landlord createLandlord(@RequestBody Landlord landlord) {
        return landlordRepo.save(landlord);
    }

    // PUT update landlord
    @PutMapping("/{id}")
    public ResponseEntity<Landlord> updateLandlord(@PathVariable Long id, @RequestBody Landlord updatedLandlord) {
        return landlordRepo.findById(id)
                .map(landlord -> {
                    landlord.setFullName(updatedLandlord.getFullName());
                    landlord.setEmail(updatedLandlord.getEmail());
                    landlord.setPassword(updatedLandlord.getPassword());
                    return ResponseEntity.ok(landlordRepo.save(landlord));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE landlord
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLandlord(@PathVariable Long id) {
        return landlordRepo.findById(id)
                .map(landlord -> {
                    landlordRepo.delete(landlord);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
