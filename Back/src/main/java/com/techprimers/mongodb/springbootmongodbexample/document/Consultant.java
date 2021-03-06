package com.techprimers.mongodb.springbootmongodbexample.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Consultant {

  // Un consultant doit fournir un
  //nom, un prénom, et une description(tous obligatoires).

  @Id
  private String uuid;
  private String nom;
  private String prenom;
  private String description;

  public Consultant() {
  }

  public Consultant(String uuid, String nom, String prenom, String description) {
    this.uuid = uuid;
    this.nom = nom;
    this.prenom = prenom;
    this.description = description;
  }

  public String getUuid() {
    return uuid;
  }

  public void setUuid(String uuid) {
    this.uuid = uuid;
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
