package com.techprimers.mongodb.springbootmongodbexample.resource;

import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import com.techprimers.mongodb.springbootmongodbexample.repository.StartupRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/startup")
public class StartupResource {

  private StartupRepository startupRepository;

  public StartupResource(StartupRepository startupRepository) {
    this.startupRepository = startupRepository;
  }

  @GetMapping("/all")
  public List<Startup> getAllStartup(){
    return startupRepository.findAll();
  }

}
