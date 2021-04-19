<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Current visit count</title>
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container text-center m-5">
	<p>you have visited the home page <c:out value="${counter}"/> times</p>
	<a href="/">Test another visit</a>
</div>

</body>
</html>