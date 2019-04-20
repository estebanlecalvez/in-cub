package com.techprimers.mongodb.springbootmongodbexample.config;

import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import com.techprimers.mongodb.springbootmongodbexample.dto.ConsultantDto;
import com.techprimers.mongodb.springbootmongodbexample.dto.StartupDto;
import com.techprimers.mongodb.springbootmongodbexample.repository.StartupRepository;
import com.techprimers.mongodb.springbootmongodbexample.service.ConsultantService;
import com.techprimers.mongodb.springbootmongodbexample.service.StartupService;
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
    CommandLineRunner commandLineRunner(StartupService startupService, ConsultantService consultantService) {
        return strings -> {
            startupService.save(new StartupDto("Infotel", "Informatique", "Le Calvez Kévin", 2, "Entreprise internationnale", "15 rue du malbilay 35000 Rennes"));
            startupService.save(new StartupDto("Kurmi", "Informatique", "Le Calvez Esteban", 1, "Entreprise internationnale", "38Ter Rue de Rennes, 35510 Cesson-Sévigné"));
            startupService.save(new StartupDto("Square Enix", "Informatique", "Square Enix Holdings", 3, "Entreprise internationnale", "Square Enix Holdings"));

            consultantService.save(new ConsultantDto("Le Calvez", "Kévin", "Developpeur"));
            consultantService.save(new ConsultantDto("Le Calvez", "Esteban", "Developpeur"));
            consultantService.save(new ConsultantDto("David", "Tofigh", "Developpeur"));
        };
    }

}

