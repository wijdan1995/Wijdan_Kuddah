<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="UTF-8">
            <title>Show Language</title>
            <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
        </head>

        <body>
            <div class="container mt-5">
                <a class="btn btn-dark mb-2 float-right" href="/languages">Dashboard</a>
                <h1>
                    <c:out value="${language.name}" />
                </h1>
                <p>Creator:
                    <c:out value="${language.creator}" />
                </p>
                <p>Version:
                    <c:out value="${language.currentVersion}" />
                </p>
                <a class="btn btn-secondary" href="/languages/${language.id}/edit">Edit Language</a>
                <form class="d-inline" action="/languages/${language.id}/delete" method="post">
                    <input type="hidden" name="_method" value="delete">
                    <input class="btn btn-danger" type="submit" value="Delete">
                </form>
            </div>

        </body>

        </html>