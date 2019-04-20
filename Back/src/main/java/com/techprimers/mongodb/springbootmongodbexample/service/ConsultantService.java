package com.techprimers.mongodb.springbootmongodbexample.service;

import com.techprimers.mongodb.springbootmongodbexample.document.Consultant;
import com.techprimers.mongodb.springbootmongodbexample.dto.ConsultantDto;
import com.techprimers.mongodb.springbootmongodbexample.repository.ConsultantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component(value = "consultantService")
public class ConsultantService {

  @Autowired
  private ConsultantRepository consultantRepository;

  public ConsultantService() {
  }

  public ConsultantService(ConsultantRepository consultantRepository) {
    this.consultantRepository = consultantRepository;
  }

  public Consultant findByUuid(String uuid){
    return this.consultantRepository.findByUuid(uuid);
  }

  public List<Consultant> findAll() {
    return this.consultantRepository.findAll();
  }

  public Consultant save(ConsultantDto consultantDto){
    Consultant consultant = new Consultant();

    UUID uuid = UUID.randomUUID();
    String randomUUIDString = uuid.toString();

    consultant.setUuid(randomUUIDString);
    consultant.setNom(consultantDto.getNom());
    consultant.setPrenom(consultantDto.getPrenom());
    consultant.setDescription(consultantDto.getDescription());

    return this.consultantRepository.save(consultant);
  }

  public void delete(String uuid){
     this.consultantRepository.deleteByUuid(uuid);
  }
}
