#pragma strict

var Speed : float = 100.0;
var MaxSpeed : float = 4000;
var RotationSpeed : float = 200.0;

var acc : float = 800;
var deAcc : float = 5;

function Start()
{
	
}

function Update()
{        
	Screen.lockCursor = true;
	Screen.lockCursor = false;
	
	var AddRot : Quaternion = Quaternion.identity;
	var roll : float = 0;
	var pitch : float = 0;
	var yaw : float = 0;
	
	roll = Input.GetAxis("Horisontal") * (Time.deltaTime * RotationSpeed);
	pitch = Input.GetAxis("Mouse Y") * (Time.deltaTime * RotationSpeed);
	yaw = Input.GetAxis("Mouse X") * (Time.deltaTime * RotationSpeed);
	
	Speed -= deAcc;
	Speed += Input.GetAxis("Vertical") * (Time.deltaTime * acc);
	
	if(Speed < 0)
	{
		Speed = 0;
	}
	if(Speed > MaxSpeed)
	{
		Speed = MaxSpeed;
	}
	
	AddRot.eulerAngles = new Vector3(-pitch, yaw, -roll);
	rigidbody.rotation *= AddRot;
	var AddPos : Vector3 = Vector3.forward;
	AddPos = rigidbody.rotation * AddPos;
	
	rigidbody.velocity = AddPos * (Time.deltaTime * Speed);
}