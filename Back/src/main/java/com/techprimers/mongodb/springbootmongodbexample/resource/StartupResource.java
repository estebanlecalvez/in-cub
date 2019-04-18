package com.techprimers.mongodb.springbootmongodbexample.resource;

import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import com.techprimers.mongodb.springbootmongodbexample.repository.StartupRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/startup")
public class StartupResource {

  private StartupRepository startupRepository;

  public StartupResource(StartupRepository startupRepository) {
    this.startupRepository = startupRepository;
  }

  // http://localhost:8095/startup/all
  @GetMapping("/all")
  public List<Startup> getAllStartup(){
    return startupRepository.findAll();
  }

  // http://localhost:8095/startup/find/0
  @GetMapping("/find/{id}")
  public ResponseEntity<Startup> findById( @PathVariable int id){
    Startup startup = startupRepository.findOne(id);

    if(startup != null){
      return new ResponseEntity<Startup>(startup, HttpStatus.OK);
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
  public Startup addStartup(@RequestBody Startup newStartup) {
    return startupRepository.save(newStartup);
  }

  // PUT - http://localhost:8095/startup/update
  /*
    {
      "id": 0,
      "name": "Test update",
      "secteur": "Informatique",
      "representant": "Le Calvez Kévin",
      "nbrCoFondateurs": 2,
      "description": "Entreprise internationnale",
      "adresse": "15 rue du malbilay 35000 Rennes"
    }
   */
  @PutMapping("/update")
  public ResponseEntity<Startup> updateStartup(@RequestBody Startup startupToUpdate){
    Startup startupFind = startupRepository.findOne(startupToUpdate.getId());

    if(startupFind == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }else{
      startupFind.setName(startupToUpdate.getName());
      startupFind.setSecteur(startupToUpdate.getSecteur());
      startupFind.setRepresentant(startupToUpdate.getRepresentant());
      startupFind.setNbrCoFondateurs(startupToUpdate.getNbrCoFondateurs());
      startupFind.setDescription(startupToUpdate.getDescription());
      startupFind.setAdresse(startupToUpdate.getAdresse());

      startupRepository.delete(startupFind.getId());
      startupRepository.save(startupFind);

      return new ResponseEntity<>(startupFind, HttpStatus.ACCEPTED);
    }
  }

  // DELETE - http://localhost:8095/startup/delete/0
  @DeleteMapping("/delete/{id}")
  public ResponseEntity deleteOne(@PathVariable int id){
    startupRepository.delete(id);
    return new ResponseEntity(HttpStatus.OK);
  }
}
