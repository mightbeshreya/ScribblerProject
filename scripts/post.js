function doEdit(){
    document.getElementById('Heading').style.borderColor='pink';
    document.getElementsByClassName('FullExplanation')[0].style.borderColor = 'pink';
    document.getElementById('Heading').contentEditable = true;
    document.getElementById('CompleteComment').contentEditable = true;
    var editsave = document.getElementById('Edit');
    if(editsave.innerHTML.includes("Edit")){
        editsave.innerHTML= "Save <span class=\'fa fa-save\'></span>";
    }else{
        editsave.innerHTML = "Edit  <span class='far fa-edit'></span>";
        document.getElementById('Heading').style.borderColor='white';
        document.getElementsByClassName('FullExplanation')[0].style.borderColor = 'white';
        document.getElementById('Heading').contentEditable = false;
        document.getElementById('CompleteComment').contentEditable = false;
    }
}

function doLike(){

    document.getElementsByClassName('Like')[0].innerHTML = "<span class='fa fa-thumbs-up'></span>  Liked";
    document.getElementsByClassName('BottomTextLike')[0].innerHTML = "1 person likes this!";
    console.log(parseInt(document.getElementById("BottomTextLikesNumber").textContent));
    var x = parseInt(document.getElementById("BottomTextLikesNumber").textContent);
    if(x==0) {
        document.getElementsByClassName('BottomTextLike')[0].innerHTML = "1 person likes this!";
        document.getElementById("BottomTextLikesNumber").innerHTML = x+1;
    }
    else{
        document.getElementsByClassName('BottomTextLike')[0].innerHTML = x+1+" people like this!";
        document.getElementById("BottomTextLikesNumber").innerHTML = x+1;
    }
}

function doComment() {
    var newCommentText = document.getElementById("NewCommentText").value;
    console.log(newCommentText);
    var node = document.createElement("div");
    node.className = "IndividualComment";
    var textnode = document.createElement("p");
    textnode.className = "IndividualCommentText";
    textnode.append(newCommentText);
    node.append(textnode);
    document.getElementsByClassName("AllCommentsDisplay")[0].prepend(node);
    document.getElementById("NewCommentText!").value = "";
}
