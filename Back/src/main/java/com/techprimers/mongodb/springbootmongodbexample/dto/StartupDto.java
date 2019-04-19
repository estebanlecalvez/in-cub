package com.techprimers.mongodb.springbootmongodbexample.dto;

public class StartupDto {

  private String name;
  private String secteur;
  private String representant;
  private int nbrCoFondateurs;
  private String description;
  private String adresse;

  public StartupDto() {
  }

  public StartupDto(String name, String secteur, String representant, int nbrCoFondateurs, String description, String adresse) {
    this.name = name;
    this.secteur = secteur;
    this.representant = representant;
    this.nbrCoFondateurs = nbrCoFondateurs;
    this.description = description;
    this.adresse = adresse;
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
