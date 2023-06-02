package com.monthlyweekly.expensesproject.Controller;

import com.monthlyweekly.expensesproject.JpaEntity.NewRecord;
import com.monthlyweekly.expensesproject.JpaRepository.NewRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/record", produces = MediaType.APPLICATION_JSON_VALUE)
public class NewRecordController {

    @Autowired
    private NewRecordRepository newRecordRepository;

  @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE)
    public NewRecord createNewRecord(@RequestBody NewRecord newRecord) {
        return newRecordRepository.save(newRecord);
    }

    // Additional methods for GET, UPDATE, DELETE etc.
}


