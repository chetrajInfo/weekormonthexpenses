package com.monthlyweekly.expensesproject.Controller;

import com.monthlyweekly.expensesproject.JpaEntity.NewRecord;
import com.monthlyweekly.expensesproject.JpaRepository.NewRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/record", produces = MediaType.APPLICATION_JSON_VALUE)

public class NewRecordController {

    @Autowired
    private NewRecordRepository newRecordRepository;

    /* //this block of code will save the data without the image in table
    // because the APPLICATION_JSON_VALUE only save the text type not the file type
  @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE)
    public NewRecord createNewRecord(@RequestBody NewRecord newRecord) {
        return newRecordRepository.save(newRecord);
    }
*/

    //this block of code will save the data and image into the table
    @PostMapping(value = "/new", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public NewRecord createNewRecord(@RequestPart("newRecord") NewRecord newRecord,
                                     @RequestPart("receipt") MultipartFile receipt) {
        // Convert the receipt to byte array
        try {
            newRecord.setReceiptImage(receipt.getBytes());
        } catch (IOException e) {
            e.printStackTrace(); // Add a more sophisticated error handling
        }
        return newRecordRepository.save(newRecord);
    }
    // Additional methods for GET, UPDATE, DELETE etc.
}


