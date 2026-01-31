using System;

namespace API.Errors;

public class ApiExeption(int statusCode,string message,string? details)
{
 public int StatutCode { get; set; }= statusCode;
 public string message { get; set; }= message;

 public string? details { get; set; }= details;
}
