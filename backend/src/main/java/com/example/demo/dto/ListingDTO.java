package com.example.demo.dto;

public class ListingDTO {
    private Long id;
    private String title;
    private String type;
    private Double price;
    private Boolean available;
    private String location;
    private Double latitude;
    private Double longitude;
    private Long landlordId;

    public ListingDTO() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public Boolean getAvailable() { return available; }
    public void setAvailable(Boolean available) { this.available = available; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }

    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }

    public Long getLandlordId() { return landlordId; }
    public void setLandlordId(Long landlordId) { this.landlordId = landlordId; }
}
