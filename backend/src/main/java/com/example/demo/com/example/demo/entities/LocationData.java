package com.example.demo.com.example.demo.entities;

import javax.persistence.Embeddable;

@Embeddable
public class LocationData {
	private float latitude;
	private float longitude;
    private String address;
	public float getLatitude() {
		return latitude;
	}
	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}
	public float getLongitude() {
		return longitude;
	}
	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
    
    
}
