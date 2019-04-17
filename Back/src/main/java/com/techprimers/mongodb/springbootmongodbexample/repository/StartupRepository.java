package com.techprimers.mongodb.springbootmongodbexample.repository;

import com.techprimers.mongodb.springbootmongodbexample.document.Startup;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StartupRepository extends MongoRepository<Startup, Integer> {
}
