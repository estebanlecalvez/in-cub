package com.techprimers.mongodb.springbootmongodbexample.repository;

import com.techprimers.mongodb.springbootmongodbexample.document.Consultant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConsultantRepository extends MongoRepository<Consultant, Integer> {
}
