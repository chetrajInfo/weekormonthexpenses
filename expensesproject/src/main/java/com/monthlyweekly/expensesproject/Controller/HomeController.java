package com.monthlyweekly.expensesproject.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "home";
    }
    @GetMapping("/submit")
    public String submitFile(){
        return "File is Submitted";
    }
}
