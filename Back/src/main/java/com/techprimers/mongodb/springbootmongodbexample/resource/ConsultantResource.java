package com.techprimers.mongodb.springbootmongodbexample.resource;

import com.techprimers.mongodb.springbootmongodbexample.document.Consultant;
import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import com.techprimers.mongodb.springbootmongodbexample.dto.ConsultantDto;
import com.techprimers.mongodb.springbootmongodbexample.service.ConsultantService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/consultant")
public class ConsultantResource {

  private ConsultantService consultantService;

  public ConsultantResource(ConsultantService consultantService) {
    this.consultantService = consultantService;
  }

  // http://localhost:8095/consultant/all
  @GetMapping("/all")
  public List<Consultant> getAllConsultant(){
    return consultantService.findAll();
  }

  // http://localhost:8095/consultant/find/d5d191f5-d445-4727-8d27-ab9ac17c03ae
  @GetMapping("/find/{uuid}")
  public ResponseEntity<Consultant> findById(@PathVariable String uuid){
    Consultant consultant = consultantService.findByUuid(uuid);

    if(consultant != null){
      return new ResponseEntity<>(consultant, HttpStatus.OK);
    }else{
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  // POST - http://localhost:8095/consultant/add
  //  With body
  /*
    {
      "nom": "consultant",
      "prenom": "3",
      "description": "Consultant informatique"
    }
  */
  @PostMapping("/add")
  public Consultant addConsultant(@RequestBody ConsultantDto newConsultant) {
    return consultantService.save(newConsultant);
  }


  // POST - http://localhost:8095/consultant/update
  /*
    {
      "uuid": "d5d191f5-d445-4727-8d27-ab9ac17c03ae",
      "nom": "consultant",
      "prenom": "3",
      "description": "Consultant informatique"
    }
   */
  @PostMapping("/update")
  public ResponseEntity<Consultant> updateStartup(@RequestBody Consultant consultantToUpdate){
    Consultant consultantFind = consultantService.findByUuid(consultantToUpdate.getUuid());
    ConsultantDto consultantDto = new ConsultantDto();

    if(consultantFind == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }else{
      consultantDto.setNom(consultantToUpdate.getNom());
      consultantDto.setPrenom(consultantToUpdate.getPrenom());
      consultantDto.setDescription(consultantToUpdate.getDescription());

      consultantFind.setUuid(consultantToUpdate.getUuid());
      consultantFind.setNom(consultantToUpdate.getNom());
      consultantFind.setPrenom(consultantToUpdate.getPrenom());
      consultantFind.setDescription(consultantToUpdate.getDescription());

      consultantService.delete(consultantFind.getUuid());
      consultantService.save(consultantDto);

      return new ResponseEntity<>(consultantFind, HttpStatus.OK);
    }
  }

  // DELETE - http://localhost:8095/consultant/delete/d5d191f5-d445-4727-8d27-ab9ac17c03ae
  @DeleteMapping("/delete/{uuid}")
  public ResponseEntity deleteOne(@PathVariable String uuid){
    Consultant consultant = consultantService.findByUuid(uuid);

    if(consultant != null){
      consultantService.delete(uuid);
      return new ResponseEntity(HttpStatus.OK);
    }else{
      return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

  }
}
