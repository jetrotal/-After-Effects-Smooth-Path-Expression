sourcePath = //Use a path from a shape layer;
	// Example: thisComp.layer("Shape Layer 1").content("Rectangle 1").content("Path 1").path;

cv = sourcePath.points();
pathIsClosed = sourcePath.isClosed();

// quadratic curve bezier approximation.
points = [];
intan = [];
outtan = [];


for (var i = 0; i < cv.length; i++) {
    if (i == 0) {
        pos = cv[i] + div(cv[i + 1] - cv[i], 2);
        points.push(pos);
        intan.push((cv[i] - pos) * (2 / 3));
        outtan.push((cv[i + 1] - pos) * (2 / 3));

    } else if (i == cv.length - 1) {
        if (pathIsClosed) {
            pos = cv[i] + div(cv[0] - cv[i], 2);
            points.push(pos);
            intan.push((cv[i] - pos) * (2 / 3));
            outtan.push((cv[0] - pos) * (2 / 3));
        }

    } else {
        pos = cv[i] + div(cv[i + 1] - cv[i], 2);
        points.push(pos);
        intan.push((cv[i] - pos) * (2 / 3));
        outtan.push((cv[i + 1] - pos) * (2 / 3));
    }
}
createPath(points, intan, outtan, pathIsClosed);
