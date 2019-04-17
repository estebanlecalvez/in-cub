package com.techprimers.mongodb.springbootmongodbexample.config;

import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import com.techprimers.mongodb.springbootmongodbexample.repository.StartupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

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
            startupRepository.save(new Startup(1, "Infotel", "Informatique", "Le Calvez Kévin", 2, "Entreprise internationnale", "15 rue du malbilay 35000 Rennes"));
        };
    }

}
