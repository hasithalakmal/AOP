/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.controller;

import com.hasitha.aop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hasitha Lakmal
 */
@RestController
@Component
public class SampleRestController {

    @Autowired
    UserService userService;

  
    @RequestMapping(value = "sample/list/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String listEmployees() {
        System.out.println("hello");
        userService.findAllUsers();
        return "Hellooo";
    }

}
