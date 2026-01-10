package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "listings")
public class Listing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String location;
    private double price;
    private String type;

    // Coordinates
    private double latitude;
    private double longitude;

    private boolean available = true;

    @ManyToOne
    @JoinColumn(name = "landlord_id")
    private Landlord landlord;

    public Listing() {}

    // Getters & Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getLocation() { return location; }

    public void setLocation(String location) { this.location = location; }

    public double getPrice() { return price; }

    public void setPrice(double price) { this.price = price; }

    public String getType() { return type; }

    public void setType(String type) { this.type = type; }

    public double getLatitude() { return latitude; }

    public void setLatitude(double latitude) { this.latitude = latitude; }

    public double getLongitude() { return longitude; }

    public void setLongitude(double longitude) { this.longitude = longitude; }

    public boolean getAvailable() { return available; }

    public void setAvailable(boolean available) { this.available = available; }

    public Landlord getLandlord() { return landlord; }

    public void setLandlord(Landlord landlord) { this.landlord = landlord; }
}
