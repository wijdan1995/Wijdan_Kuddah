<%@ page isErrorPage="true" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
        <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <title>Languages</title>
                <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
            </head>

            <body>
                <div class="container mt-5">
                    <a class="btn btn-dark float-right" href="/languages">Dashboard</a> 
                    <form class="ml-2 d-inline" action="/languages/${language.id}/delete" method="post">
                        <input type="hidden" name="_method" value="delete">
                        <input class="btn btn-danger" type="submit" value="Delete">
                    </form>

                    <h1 class="mt-2">Edit Language</h1>

                    <div>
                        <form:form action="/languages/${language.id}" method="post" modelAttribute="language">
                            <div class="form-group">
                                <form:label path="name">Name:</form:label>
                                <form:input path="name" class="form-control" />
                                <form:errors path="name" class="text-danger" />
                            </div>
                            <div class="form-group">
                                <form:label path="creator">Creator:</form:label>
                                <form:input path="creator" class="form-control" />
                                <form:errors path="creator" class="text-danger" />
                            </div>
                            <div class="form-group">
                                <form:label path="currentVersion">Version:</form:label>
                                <form:input path="currentVersion" class="form-control" />
                                <form:errors path="currentVersion" class="text-danger" />
                            </div>
                            <input type="submit" value="Update" class="btn btn-dark mt-4" />
                        </form:form>
                    </div>



                </div>
            </body>

            </html>