package com.techprimers.mongodb.springbootmongodbexample.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Startup {

  @Id
  private int id;
  private String name;
  private String secteur;
  private String representant;
  private int nbrCoFondateurs;
  private String description;
  private String adresse;

  // Necessaire pour la déserialisation de l'entités par mongo
  public Startup() {
  }

  public Startup(int id, String name, String secteur, String representant, int nbrCoFondateurs,
                 String description, String adresse) {
    this.id = id;
    this.name = name;
    this.secteur = secteur;
    this.representant = representant;
    this.nbrCoFondateurs = nbrCoFondateurs;
    this.description = description;
    this.adresse = adresse;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSecteur() {
    return secteur;
  }

  public void setSecteur(String secteur) {
    this.secteur = secteur;
  }

  public String getRepresentant() {
    return representant;
  }

  public void setRepresentant(String representant) {
    this.representant = representant;
  }

  public int getNbrCoFondateurs() {
    return nbrCoFondateurs;
  }

  public void setNbrCoFondateurs(int nbrCoFondateurs) {
    this.nbrCoFondateurs = nbrCoFondateurs;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getAdresse() {
    return adresse;
  }

  public void setAdresse(String adresse) {
    this.adresse = adresse;
  }
}
