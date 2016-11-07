package com.hasitha.aop.service;


import com.hasitha.aop.dao.massa2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


//@Service("userService")
@Component
public class UserServiceImpl implements UserService {

    @Autowired
     massa2 massa2;



    public void findAllUsers() {
        System.out.println("........................Method.....................");
        massa2.test();
    }

   
}
