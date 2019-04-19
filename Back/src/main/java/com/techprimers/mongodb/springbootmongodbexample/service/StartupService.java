package com.techprimers.mongodb.springbootmongodbexample.service;

import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import com.techprimers.mongodb.springbootmongodbexample.dto.StartupDto;
import com.techprimers.mongodb.springbootmongodbexample.repository.StartupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component(value = "startupService")
public class StartupService {

  @Autowired
  private StartupRepository startupRepository;

  public StartupService() {
  }

  public StartupService(StartupRepository startupRepository) {
    this.startupRepository = startupRepository;
  }

  public Startup findByUuid(String uuid){
    return this.startupRepository.findByUuid(uuid);
  }

  public List<Startup> findAll(){
    return this.startupRepository.findAll();
  }

  public Startup save(StartupDto startupDto){
    // Transformation du DTO en DAO
    Startup startup = new Startup();

    UUID uuid = UUID.randomUUID();
    String randomUUIDString = uuid.toString();

    startup.setUuid(randomUUIDString);
    startup.setName(startupDto.getName());
    startup.setSecteur(startupDto.getSecteur());
    startup.setRepresentant(startupDto.getRepresentant());
    startup.setNbrCoFondateurs(startupDto.getNbrCoFondateurs());
    startup.setDescription(startupDto.getDescription());
    startup.setAdresse(startupDto.getAdresse());

    return this.startupRepository.save(startup);
  }

  public boolean delete(String uuid){
    return this.startupRepository.deleteByUuid(uuid);
  }

}
