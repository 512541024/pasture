package com.example.pasture.service.intf;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(value = "pasture-main")
@RequestMapping("/pasture-main")
public interface UserProvider {

//    @RequestMapping(value = "/add")
//    List<Usr> add(@RequestParam("user") Usr user);
//
//    @RequestMapping(value = "/update")
//    List<Usr> update(@RequestParam("user") Usr user);
//
//    @RequestMapping(value = "/get")
//    List<Usr> get(@RequestParam(value = "userId", required = false) Integer userId);
//
//    @RequestMapping(value = "/delete")
//    List<Usr> delete(@RequestParam(value = "userId", required = false) String userId, @RequestParam(value = "userIdList", required = false) List<String> userIdList);
}