package com.example.demo.com.example.demo.entities;

import javax.persistence.Embeddable;

@Embeddable
public class Residence {
	public String country;
	public String city;

	public Residence() {
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
	
}