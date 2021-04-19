<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Lookify | Top Ten</title>
        <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
    </head>

    <body>
        <div class="container text-center mt-4">
            <nav class="d-flex justify-content-between">
                <span>
                    Top Ten Songs
                </span>
                
                <a class="btn btn-dark mb-2 float-right" href="/dashboard">Dashboard</a>
            </nav>
            <ul class="list-group">
                <c:forEach items="${songs}" var="song">
                    <li class="list-group-item"><c:out value="${song.rating}" /> - <a href="/songs/${song.id}"><c:out value="${song.name}" /></a> - <c:out value="${song.artist}" /></li>
                </c:forEach>
            </ul>
        </div>
    </body>

    </html>