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
  public ResponseEntity<Startup> findById( @PathVariable(value="id") Long id){
    Startup startup = startupRepository.findOne(id.intValue());

    if(startup != null){
      return new ResponseEntity<Startup>(startup, HttpStatus.OK);
    }else{
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  // POST - http://localhost:8095/startup/all
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

  @PutMapping("/update")
  public ResponseEntity<Startup> updateStartup(@RequestBody Startup startupToUpdate){
    Startup startupUpdated = startupRepository.save(startupToUpdate);
    return new ResponseEntity<Startup>(startupUpdated, HttpStatus.ACCEPTED);
  }
}
