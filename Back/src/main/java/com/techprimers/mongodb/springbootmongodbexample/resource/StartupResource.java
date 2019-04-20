package com.techprimers.mongodb.springbootmongodbexample.resource;

import com.techprimers.mongodb.springbootmongodbexample.dto.StartupDto;
import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import com.techprimers.mongodb.springbootmongodbexample.service.StartupService;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/startup")
public class StartupResource {

  private StartupService startupService;


  public StartupResource(StartupService startupService) {
    this.startupService = startupService;
  }

  // http://localhost:8095/startup/all
  @GetMapping("/all")
  public List<Startup> getAllStartup(){
    return startupService.findAll();
  }

  // http://localhost:8095/startup/find/d5d191f5-d445-4727-8d27-ab9ac17c03ae
  @GetMapping("/find/{uuid}")
  public ResponseEntity<Startup> findById( @PathVariable String uuid){
    Startup startup = startupService.findByUuid(uuid);

    if(startup != null){
      return new ResponseEntity<>(startup, HttpStatus.OK);
    }else{
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  // POST - http://localhost:8095/startup/add
  //  With body
  /*
    {
      "name": "Kurmi",
      "secteur": "Informatique",
      "representant": "Le Calvez Esteban",
      "nbrCoFondateurs": 1,
      "description": "Entreprise internationnale",
      "adresse": "38Ter Rue de Rennes, 35510 Cesson-Sévigné"
    }
  */
  @PostMapping("/add")
  public Startup addStartup(@RequestBody StartupDto newStartup) {
    return startupService.save(newStartup);
  }

  // PUT - http://localhost:8095/startup/update
  /*
    {
      "uuid": "d5d191f5-d445-4727-8d27-ab9ac17c03ae",
      "name": "Test update",
      "secteur": "Informatique",
      "representant": "Le Calvez Kévin",
      "nbrCoFondateurs": 2,
      "description": "Entreprise internationnale",
      "adresse": "15 rue du malbilay 35000 Rennes"
    }
   */
  @PostMapping("/update")
  public ResponseEntity<Startup> updateStartup(@RequestBody Startup startupToUpdate){
    Startup startupFind = startupService.findByUuid(startupToUpdate.getUuid());
    StartupDto startupDto = new StartupDto();

    if(startupFind == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }else{
      startupDto.setName(startupToUpdate.getName());
      startupDto.setSecteur(startupToUpdate.getSecteur());
      startupDto.setRepresentant(startupToUpdate.getRepresentant());
      startupDto.setNbrCoFondateurs(startupToUpdate.getNbrCoFondateurs());
      startupDto.setDescription(startupToUpdate.getDescription());
      startupDto.setAdresse(startupToUpdate.getAdresse());

      startupService.delete(startupFind.getUuid());
      startupService.save(startupDto);

      return new ResponseEntity<>(startupFind, HttpStatus.OK);
    }
  }

  // DELETE - http://localhost:8095/startup/delete/d5d191f5-d445-4727-8d27-ab9ac17c03ae
  @DeleteMapping("/delete/{uuid}")
  public ResponseEntity deleteOne(@PathVariable String uuid){
    Startup startup = startupService.findByUuid(uuid);

    if(startup != null){
      startupService.delete(uuid);
      return new ResponseEntity(HttpStatus.OK);
    }else{
      return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

  }
}
