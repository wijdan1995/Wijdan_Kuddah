<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
<title>Lookify | Show Song</title>
</head>
<body>
	<div class="container mt-4">
        <div class="container mt-5">
            <a class="btn btn-dark mb-2 float-right" href="/dashboard">Dashboard</a>
            <h1>
                <c:out value="${song.name}" />
            </h1>
            <p>Artist:
                <c:out value="${song.artist}" />
            </p>
            <p>Rating:
                <c:out value="${song.rating}" />
            </p>
            <form action="/songs/${song.id}/delete" method="post">
                <input type="hidden" name="_method" value="delete">
                <input class="btn btn-danger" type="submit" value="Delete">
            </form>
        </div>
	</div>
</body>
</html>