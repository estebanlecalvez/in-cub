package com.techprimers.mongodb.springbootmongodbexample.dto;

public class ConsultantDto {

  private String nom;
  private String prenom;
  private String description;

  public ConsultantDto() {
  }

  public ConsultantDto(String nom, String prenom, String description) {
    this.nom = nom;
    this.prenom = prenom;
    this.description = description;
  }

  public String getNom() {
    return nom;
  }

  public void setNom(String nom) {
    this.nom = nom;
  }

  public String getPrenom() {
    return prenom;
  }

  public void setPrenom(String prenom) {
    this.prenom = prenom;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
