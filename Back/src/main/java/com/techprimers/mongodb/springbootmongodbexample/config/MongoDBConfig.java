package com.techprimers.mongodb.springbootmongodbexample.config;

import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import com.techprimers.mongodb.springbootmongodbexample.repository.StartupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;
import java.util.UUID;

/**
 *
 * Initialisation de la base de données de mongoDB
 */
@EnableMongoRepositories(basePackageClasses = StartupRepository.class)
@Configuration
public class MongoDBConfig {
    @Bean
    CommandLineRunner commandLineRunner(StartupRepository startupRepository) {
        return strings -> {
            List<Startup> startups = startupRepository.findAll();

          UUID uuid = UUID.randomUUID();
          String randomUUIDString = uuid.toString();

            if(startups.size() == 0){
              startupRepository.save(new Startup(randomUUIDString, "Infotel", "Informatique", "Le Calvez Kévin", 2, "Entreprise internationnale", "15 rue du malbilay 35000 Rennes"));
            }
        };
    }

}

